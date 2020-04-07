import React from 'react';
import { chevronRight } from 'react-icons-kit/feather/chevronRight'
import PreviewIcon from '../icon'

function Button(props) {
    return (
        <button className={props.Class} onClick={props.Clickble}>
            <span className={`title ${props.Title ? props.Title : ''}`}>{props.Name}</span>
            {props.BtnIcon &&
                <span className={props.BtnIcon}>
                    <PreviewIcon icon={chevronRight} />
                </span>
            }
        </button>
    );
}

export default Button;