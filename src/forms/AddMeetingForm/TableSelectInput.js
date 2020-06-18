import React from 'react'

import Button from '@material-ui/core/Button'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'

const Item = () => {
    return <div>Item</div>
}

const ItemsWrapper = ({ children }) => {
    return (
        <div
            style={{
                border: '1px solid grey',
                display: 'flex',
                flexWrap: 'wrap',
            }}
        >
            {children}
        </div>
    )
}

const TableSelectInput = ({ ItemComponent, Table, items, setItems }) => {
    const [dialogItems, setDialogItems] = React.useState([])
    const [dialogOpen, setDialogOpen] = React.useState(false)

    const handleEdit = () => {
        setDialogItems(items)
        setDialogOpen(true)
    }

    const handleDeleteItem = id => {
        let newItems = items.filter(item => item._id !== id)
        setItems(newItems)
    }

    const handleDialogDeleteItem = id => {
        let newItems = dialogItems.filter(item => item._id !== id)
        setDialogItems(newItems)
    }

    const renderItems = items => {
        return items.map((item, index) => (
            <ItemComponent
                data={item}
                handleDelete={() => handleDeleteItem(item._id)}
                key={index}
            />
        ))
    }

    const renderDialogItems = items => {
        return items.map((item, index) => (
            <ItemComponent
                data={item}
                handleDelete={() => handleDialogDeleteItem(item._id)}
                key={index}
            />
        ))
    }

    const renderSelectionDialog = () => {
        const handleClose = () => {
            setDialogOpen(false)
        }
        const handleSubmit = () => {
            setItems(dialogItems)
            setDialogOpen(false)
        }

        return (
            <Dialog onClose={handleClose} open={dialogOpen}>
                <DialogTitle onClose={handleClose}>Add Members</DialogTitle>
                <DialogContent>
                    <ItemsWrapper>
                        {renderDialogItems(dialogItems)}
                    </ItemsWrapper>

                    {dialogOpen && (
                        <Table
                            dialogItems={dialogItems}
                            items={items}
                            onChange={setDialogItems}
                        />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
    return (
        <>
            {renderSelectionDialog()}
            <ItemsWrapper>
                {renderItems(items)}
                <Button onClick={handleEdit} color="primary">
                    Edit Members
                </Button>
            </ItemsWrapper>
        </>
    )
}

export default TableSelectInput
