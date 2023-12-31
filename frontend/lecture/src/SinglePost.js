import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Typography } from '@mui/material';
import axios from 'axios'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Nav from './Nav';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getToken } from './helpers';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const SinglePost = () => {
    const [post, setPost] = useState({});
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    let { id } = useParams();
    console.log(id);

    const fetchPost = () => {
        const config = {
            headers: {
                authorization: `Bearer ${getToken()}`
            }
        }
        axios.get(`${process.env.REACT_APP_API}/posts/${id}`, config)
            .then(response => {
                console.log(response.data);
                setPost(response.data);
            })
            .catch(error => alert('Error Fetching Posts'));
    }

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <div>
            <Nav /><br />
            <Container>
                <Card sx={{ maxwidth: '345' }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                JP
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={post.title}
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="394"
                        image="/images/chaeyoung3.jpg"
                        alt={post.title}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {post.content}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                {post.slug}
                            </Typography>
                            <Typography paragraph>
                                {post.content}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Container>
        </div>
    )
}

export default SinglePost