import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const SimpleCard = ({article}) => {
  return (
    <Card className="MuiPaper-elevation3 blog-card">
      <CardContent>
        <Typography>
        	<a href={article.url} target="_blank" rel="noopener noreferrer" alt="article-title">{article.title}</a>
        </Typography>
					<Typography className="purple">
						{article.tag_list.map(tag =>  {return '#' + tag + ' '} )}
        	</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" href={article.url} target="_blank" rel="noopener noreferrer" alt="learn-more-btn">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default SimpleCard