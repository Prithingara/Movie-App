import { IconButton } from "@mui/material";
import Badge from '@mui/material/Badge';
import { useState}  from "react";


export default function Counter()
{
     let [like,setLike] =useState(0);
     let [dislike,setDislike] = useState(0);

     const increamentLike =() => setLike(like +1);
     const increamentDisLike =() => setDislike(dislike+1);

     return (
        <div>
            <IconButton aria-label="Like" color ="primary" onClick={increamentLike} >
            <Badge badgeContent={like} color="primary">
      
                👍</Badge>
            </IconButton>

            <IconButton aria-label="DisLike" color ="error" onClick={increamentDisLike} >
            <Badge badgeContent={dislike} color="error">
                👎 </Badge>
                
            </IconButton>

            {/* <button onClick = {() => setLike(like +1)}>👍 {like} </button>
            <button onClick = {() =>setDislike(dislike +1)}>👎 {dislike} </button> */}

        </div>
     );
}