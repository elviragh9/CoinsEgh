import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { 
  Grid, 
  Card, 
  CardContent, 
  CardActionArea, 
  Typography, 
  Box, 
  Avatar, 
  CircularProgress 
} from '@mui/material';

export const Home = () => {
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
      })
      .then((data) => {
        setCoins(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Cryptocurrencies
      </Typography>
      
      <Grid container spacing={3}>
        {coins.map((coin) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={coin.id}>
            <Card 
              elevation={2}
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                }
              }}
            >
              <CardActionArea 
                onClick={() => navigate("/detail/" + coin.id)}
                sx={{ height: '100%', p: 1 }}
              >
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar 
                    src={coin.image} 
                    alt={coin.name} 
                    sx={{ width: 48, height: 48 }} 
                  />
                  <Box sx={{ overflow: 'hidden' }}>
                    <Typography variant="h6" component="div" noWrap sx={{ fontWeight: 'bold' }}>
                      {coin.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textTransform: 'uppercase' }}>
                      {coin.symbol}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1, fontWeight: 'medium' }}>
                      ${coin.current_price?.toLocaleString()} USD
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};