import React, { useState } from 'react'
import { withStyles } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'
import Pagination from '@components/Pagination/Pagination'
import Button from '@components/CustomButtons/Button'

import Topbar from './Topbar'

import style from '@assets/jss/pages/shopPage'

import ShopItem from './ShopItem'

import useReactRouter from 'use-react-router'

const educationalPrograms = [
    {
        name: 'A1 Course for Kids',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
        price: 22,
        publisher: 'Oxford',
        targetGroup: 'Kids',
        level: 'A1',
        status: 'draft',
    },
    {
        name: 'A2 Course Adults',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
        price: 22,
        publisher: 'Oxford',
        targetGroup: 'Adults',
        level: 'A2',
        status: 'published',
    },
    {
        name: 'B1 Course for Kids',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
        price: 22,
        publisher: 'Oxford',
        targetGroup: 'Kids',
        level: 'B1',
        status: 'published',
    },
    {
        name: 'B1 Course for adults',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
        price: 25,
        publisher: 'Oxford',
        targetGroup: 'Kids',
        level: 'B1',
        status: 'draft',
    },
    {
        name: 'B2 Course for Adults',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
        price: 22,
        publisher: 'Oxford',
        targetGroup: 'Adults',
        level: 'B2',
        status: 'draft',
    },
    {
        name: 'C1 Course for Kids',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy`,
        price: 25,
        publisher: 'Oxford',
        targetGroup: 'Kids',
        level: 'C1',
        status: 'published',
    },
]

const ShopPage = ({ classes: c }) => {
    const defaultFilters = {
        show: 'all',
        level: 'all',
        group: 'all',
    }

    const [filters, setFilters] = useState(defaultFilters)

    React.useEffect(() => {
        console.log(filters)
    }, [filters])

    const { history } = useReactRouter()

    const onAddProduct = () => {
        return history.push(`/shop/add`)
    }

    const renderShopItems = () => {
        return educationalPrograms
            .filter(
                program =>
                    program.status === filters.show || filters.show === 'all',
            )
            .filter(
                program =>
                    program.level === filters.level || filters.level === 'all',
            )
            .filter(
                program =>
                    program.targetGroup === filters.group ||
                    filters.group === 'all',
            )
            .map((program, index) => {
                return (
                    <ShopItem
                        onClick={() =>
                            history.push('/shop/educational-program/')
                        }
                        key={index}
                        program={program}
                    />
                )
            })
    }

    return (
        <>
            <Topbar filters={filters} setFilters={setFilters} />
            <GridContainer alignItems="flex-start" justify="flex-start">
                {renderShopItems()}
            </GridContainer>
            <GridContainer justify="space-between" alignItems="center">
                <GridItem>
                    <Button onClick={onAddProduct} size="sm" color="primary">
                        Add new <Add className={c.icon} />
                    </Button>
                </GridItem>
                <GridItem>
                    <Pagination
                        pages={[
                            { active: true, text: 1 },
                            { text: 2 },
                            { text: 3 },
                            { text: 4 },
                        ]}
                    />
                </GridItem>
            </GridContainer>
        </>
    )
}

export default withStyles(style)(ShopPage)
