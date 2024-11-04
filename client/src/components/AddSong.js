import React from "react";
import { useMutation } from "@apollo/client";
import { GET_POSTS, ADD_SONG } from "../query";
import { Button } from 'semantic-ui-react';

export const AddComment = () => {
    const [addComment, {data}] = useMutation(ADD_SONG)

    const onSubmit = (e) => {
        e.preventDefault();

        const {author, text} = e.target.elements;

        if(!author.value || !text.value){
            return
        }

        addComment({
            variables: {author: author.value, text:text.value},
            refetchQueries: [{query: GET_POSTS}]
        })
    }

    return <form onSubmit={onSubmit} className="ui container">
        <div className="ui form">
            <div className="field">
                <label>Name</label>
                <input type="text" name="author" placeholder="Name"/>
            </div>
        </div>
        <div className="ui form">
            <div className="field">
                <label>Favorite Song</label>
                <input type="text" name="text" placeholder="Favorite Song"/>
            </div>
        </div>
        <Button primary>Add Song</Button>
    </form>
}