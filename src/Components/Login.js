import * as React from 'react';
import { useContext,useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Alert from '@mui/material/Alert';
import './Login.css'
import insta from '../Assets/Instagram.JPG'
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {Link} from  'react-router-dom';
import bg from '../Assets/insta.png';

import { AuthContext } from '../Context/AuthContext';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const store = useContext(AuthContext)
    console.log(store)
    const useStyles = makeStyles({
        text1:{
            color:'grey',
            textAlign:'center'
        },
        text2:{
            textAlign:'center'
        },
        card2:{
            height:'50px',
            marginTop:'2%'
        }
    })
    const classes = useStyles();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const history = useHistory();
    const {login} = useContext(AuthContext);

    const handleClick = async() => {
        try{
            setError('');
            setLoading(true)
            let res = await login(email,password);
            setLoading(false);
            history.push('/')
        }catch(err){
            setError(err);
            setTimeout(()=>{
                setError('')
            },2000);
            setLoading(false);
        }
    }

  return (
      <div className="loginWrapper">

          <div className="loginCard">
            <Card variant="outlined">
                <div className="insta-logo">
                    <img src={insta} alt="" />
                </div>
                <CardContent>
                    {error!='' && <Alert severity="error">{error}</Alert>}
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <Typography className={classes.text2} color="primary" variant="subtitle1">
                        Forget Password ?
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button color="primary" fullWidth={true} variant="contained" onClick={handleClick} disabled={loading}>
                    Log in
                    </Button>
                </CardActions>
            </Card>
            <Card variant="outlined" className={classes.card2}>
                <CardContent>
                    <Typography className={classes.text1} variant="subtitle1">
                        Don't have an account ? <Link to="/signup" style={{textDecoration:'none'}}>Signup</Link>
                    </Typography>
                </CardContent>
            </Card>
          </div>
      </div>
    
  );
}