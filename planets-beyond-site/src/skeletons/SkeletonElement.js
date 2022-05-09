import "./Skeleton.css"
import React from "react"

export const SkeletonElement = ({type}) => {

const classes = `skeleton ${type}`


    return (
        <div className={classes}></div>
    )
}