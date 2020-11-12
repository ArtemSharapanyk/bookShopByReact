import React, { Fragment } from 'react';
import './tags.css';

export default ({arrayOfTags, activeTag, changeTagFunc }) => {
    return (
        <Fragment>
            <ul className='tagsOfBooks'>
                {arrayOfTags.map((item, index) => {
                    let cls = [
                        'tag',
                        item,
                        item === activeTag ? 'activeTag' : ''
                    ]
                
                    return (
                        <li className={cls.join(' ')} onClick={changeTagFunc.bind(this, item)} key={index}>{item}</li>
                    )
                })}
            </ul>

        </Fragment>
    )
}