import React from "react"
import MUIRichTextEditor from 'mui-rte'


export default function RichText() { // mui-rte & draft
    return (
        <>
            <h2>RichText</h2>
            <MUIRichTextEditor 
                //defaultValue={data}
                label="Start typing..." 
            />
        </>
    ) 
}