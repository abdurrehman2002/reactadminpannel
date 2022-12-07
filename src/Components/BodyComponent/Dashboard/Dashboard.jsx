import React, { useEffect } from 'react'
import { Box, Grid, Card, CardContent, Typography, Button } from '@material-ui/core'
import { useStyles } from '../BodyStyles'
import { PageHeader } from '../../Common/CommonComponent';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { DisplayCardGraph } from '../../Common/GraphComponent';
import { randomValueGenerator } from '../../../utils/fakeArrayDataGenerator';



export default function Dashboard() {
  const classes = useStyles();

  const DisplayData = [
    {
      label: "Post",
      value: randomValueGenerator({ digit: 1000 }),
      icon: <ArrowDropUpIcon />,
      iconLabel: "4%"
    },
    {
      label: "Pages",
      value: randomValueGenerator({ digit: 100 }),
      icon: <ArrowDropUpIcon />,
      iconLabel: "9%"
    },
    {
      label: "New Visitor",
      value: randomValueGenerator({ digit: 100 }),
      icon: <ArrowDropDownIcon />,
      iconLabel: "23%"
    },
    {
      label: "Total visitor",
      value: randomValueGenerator({ digit: 1000 }),
      icon: <ArrowDropDownIcon />,
      iconLabel: "30%"
    }
  ]


  useEffect(() => {
    let myChart = DisplayCardGraph();
    console.log("abc")
    return () => {
      myChart.destroy()
    }
  })

  return (
    <Box>

      <PageHeader label="Dashboard" pageTitle="blog Overview" />

      <Grid container>
        <Grid item xs={6} sm={3}>
          <Card >
            {DisplayData.map((item, i) => (
              <CardContent key={i} className={classes.cardContent}>
                <canvas id="myChart-01"
                  className={classes.displayCardGraph}>
                </canvas>

                <Typography variant='body2' className={classes.cardLabel}>
                  {item.label}
                </Typography>
                <Typography
                  variant='h5'
                  component='h6'
                  className={classes.cardTitle}>
                  {item.value}
                </Typography>

                <Typography component="p"
                  style={{
                    textAlign: "center",
                    marginBottom: "0px"
                  }}>
                  <Button size="small"
                    className={classes.radioBtn}
                    startIcon={item.icon}>
                    {item.iconLabel}
                  </Button>
                </Typography>
              </CardContent>
            ))};
          </Card>
        </Grid>
      </Grid>

    </Box>
  )
}
