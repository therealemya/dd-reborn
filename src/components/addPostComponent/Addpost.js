import React, {Component} from "react";
import "./Addpost.css";

export default class Addpost extends Component{
    render() {
        return (
          <div className = "add post">
            <form onSubmit ={this.onSubmit}>
                 <label className = "add-post__image-label"> Add image</label>
                <input className = "add-post__image" id ="post-image" type ="file" name = "image" accept="image/*" onChange={this.onChange}></input>
              <input className = "add-post__submit" id ="post-image" type ="text" name = "image_desc" placeholder="About image"  onChange={this.onChange}></input>
            <button className="add-post__submit" type ="submit">Post</button>
       </form>
      </div>
            );
        }
    }