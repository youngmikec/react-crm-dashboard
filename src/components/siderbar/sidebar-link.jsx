import React from "react";

const SidebarLink = ({active, title, iconClass}) => {
    return (
        <>
            <div className={active ? 'd-flex my-2 px-3 py-3 active' : 'd-flex my-2 px-3 py-3'}>
                    <span className='flex mx-1'>
                        <i className={iconClass} aria-hidden="true"></i>
                    </span>
                    <span className="flex">{title}</span>
                </div>
        </>
    )
}

export default SidebarLink;