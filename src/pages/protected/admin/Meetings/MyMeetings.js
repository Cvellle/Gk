/*eslint-disable*/
import React from 'react'
import PropTypes from 'prop-types'
// react component used to create a calendar with events on it
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
// dependency plugin for react-big-calendar
import moment from 'moment'
// react component used to create alerts
import SweetAlert from 'react-bootstrap-sweetalert'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Card from '@components/Card/Card'
import CardBody from '@components/Card/CardBody'

import { withApollo } from 'react-apollo'
import { withRouter } from 'react-router-dom'
import { MEETINGS_QUERY } from '@apollo/server/queries'

const localizer = momentLocalizer(moment)

class Calendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            alert: null,
        }
        this.hideAlert = this.hideAlert.bind(this)
    }

    selectedEvent = event => {
        alert(event.title)
    }

    addNewEventAlert = slotInfo => {
        /*
        this.setState({
            alert: (
                <SweetAlert
                    input
                    showCancel
                    style={{ display: 'block', marginTop: '-100px' }}
                    title="Input something"
                    onConfirm={e => this.addNewEvent(e, slotInfo)}
                    onCancel={() => this.hideAlert()}
                    confirmBtnCssClass={
                        this.props.classes.button +
                        ' ' +
                        this.props.classes.success
                    }
                    cancelBtnCssClass={
                        this.props.classes.button +
                        ' ' +
                        this.props.classes.danger
                    }
                />
            ),
        })
        */
    }
    addNewEvent = (e, slotInfo) => {
        let newEvents = this.state.events
        newEvents.push({
            title: e,
            start: slotInfo.start,
            end: slotInfo.end,
        })
        this.setState({
            alert: null,
            events: newEvents,
        })
    }
    hideAlert = () => {
        this.setState({
            alert: null,
        })
    }
    eventColors = event => {
        let backgroundColor = 'event-'
        if (event.color) {
            backgroundColor = backgroundColor + event.color
        } else {
            backgroundColor = backgroundColor + 'default'
        }
        return {
            className: backgroundColor,
        }
    }
    getData = async e => {
        const { query } = this.props.client
        let queryOptions = {
            query: MEETINGS_QUERY,
            fetchPolicy: 'network-only',
            variables: {
                pagination: {
                    page: e.page + 1,
                    limit: e.pageSize,
                },
                search: e.search,
            },
        }

        if (e.orderBy) {
            queryOptions.variables = {
                ...queryOptions.variables,
                sort: {
                    field: e.orderBy.field,
                    order: e.orderDirection === 'asc' ? 1 : -1,
                },
            }
        }

        const response = await query(queryOptions)
        const { meetings } = response.data
        return {
            data: meetings.docs,
            page: e.page,
            totalCount: meetings.total,
        }
    }
    componentDidMount = async () => {
        this.setDataToEvents(await this.getData({ page: 0, pageSize: 10 }))
    }
    setDataToEvents = data => {
        this.setState({
            events: data.data.map(meeting => ({
                title: meeting.title,
                start: moment(meeting.date).toDate(),
                allDay: false,
                end: moment(meeting.date)
                    .add(60, 'minute')
                    .toDate(),
                color: data.meetingType === 'REGISTRATION' ? 'green' : 'azure',
            })),
        })
    }
    render() {
        return (
            <>
                {this.state.alert}

                <Card>
                    <CardBody calendar>
                        <BigCalendar
                            selectable
                            localizer={localizer}
                            events={this.state.events}
                            defaultView="agenda"
                            scrollToTime={new Date(1970, 1, 1, 6)}
                            defaultDate={new Date()}
                            onSelectEvent={event => this.selectedEvent(event)}
                            onSelectSlot={slotInfo =>
                                this.addNewEventAlert(slotInfo)
                            }
                            eventPropGetter={this.eventColors}
                        />
                    </CardBody>
                </Card>
            </>
        )
    }
}

export default withRouter(withApollo(Calendar))
