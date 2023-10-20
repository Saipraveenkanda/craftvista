import {
  Avatar,
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const StoreItem = (props) => {
  const { itemDetails } = props;
  const {
    userImage,
    itemTitle,
    itemImage,
    itemDescription,
    itemCost,
    originalCost,
    smallDescription,
  } = itemDetails;
  return (
    <Grid
      item
      // sx={{
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "space-between",
      //   maxWidth: { xs: "100%", sm: "45%", md: "30%", lg: "25%", xl: "30%" },
      //   flexWrap: "wrap",
      //   minWidth: { xs: "100%", sm: "45%", md: "30%", lg: "25%", xl: "30%" },
      //   marginBottom: 20,
      // }}
      sx={{
        boxShadow: "0px 0px 10px 0px #bfbfbf",
        mr: { xs: 0, md: 2, sm: 1 },
        mb: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        maxWidth: { xs: "100%", sm: "48%", md: "45%", lg: "30%", xl: "25%" },
        minWidth: { xs: "100%", sm: "48%", md: "45%", lg: "30%", xl: "25%" },
        borderTop: " 5px ridge #5a8cdf",
        // borderBottom: "5px ridge #5a8cdf",
        borderTopRightRadius: "20px",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "red" }}
            aria-label="recipe"
            alt="user"
            src={userImage}
          />
        }
        title={itemTitle}
        subheader={smallDescription}
      />
      <CardMedia
        component="img"
        height="194"
        image={itemImage}
        alt={itemTitle}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {itemDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignSelf: "space-between",
          }}
        >
          <Stack direction={"row"} alignItems="center">
            <Typography variant="h6" fontWeight={600} color="info">
              RS: {itemCost}
            </Typography>
            <Typography
              variant="span"
              fontWeight={100}
              color="red"
              sx={{ textDecoration: "line-through" }}
            >
              {originalCost}
            </Typography>
          </Stack>
          <Button variant="contained" color="primary">
            Add to cart
          </Button>
        </Box>
      </CardActions>
    </Grid>
  );
};

export default StoreItem;
