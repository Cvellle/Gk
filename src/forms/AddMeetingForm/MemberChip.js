import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import FaceIcon from '@material-ui/icons/Face'

const MemberChip = ({ handleClick, handleDelete, data }) => {
    return (
        <Chip
            icon={<FaceIcon />}
            label={`${data.firstName} ${data.lastName}`}
            onClick={() => alert(JSON.stringify(data))}
            onDelete={handleDelete}
        />
    )
}

export default MemberChip
