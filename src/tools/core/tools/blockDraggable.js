import React, { useRef } from 'react'
import { Draggable } from 'react-beautiful-dnd';

const BlockDraggable = ({ Block, _id, index, move, ...restProps }) => {

  var propsToSend = {
    index,
    _id,
    ...restProps
  };
  return (
    <Draggable draggableId={_id} index={index}>
    {(provided)=>
      <div>
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Block { ...propsToSend }>
            123
          </Block>
        </div>
      </div>
    }
    </Draggable>
  )
}
export default BlockDraggable
