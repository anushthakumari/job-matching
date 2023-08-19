import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

export default function TemporaryDrawer() {
	const [isopne, setisopne] = useState(false);

	return (
		<div>
			<Grid container component="main" sx={{ height: "91vh" }}>
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage:
							"linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(49, 48, 49, 0.7)), url('https://wallpapers.com/images/hd/minimalistic-business-setup-dudslamn7oardprl.jpg');",
						// "url(https://wallpapers.com/images/hd/minimalistic-business-setup-dudslamn7oardprl.jpg)",
						backgroundRepeat: "no-repeat",
						// backgroundColor: (t) =>
						// 	t.palette.mode === "light"
						// 		? t.palette.grey[50]
						// 		: t.palette.grey[900],
						backgroundColor: "red",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}>
					<Box
						sx={{
							height: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Typography variant="h1">
							ML model That Predicts Job Role
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
					<Box
						sx={{
							height: "100%",
							width: "100%",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Typography component="h1" variant="h5">
							Enter Resume Text
						</Typography>
						<Box component="form" noValidate sx={{ mt: 1 }}>
							{/* <TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
								multiline
							/> */}
							<Box>
								<TextareaAutosize
									style={{
										width: "500px",
										padding: "0.4rem",
										borderRadius: "0.5rem",
									}}
									minRows={20}
									min
								/>
							</Box>

							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
								}}>
								<Button
									sx={{
										minWidth: "200px",
										borderRadius: "1rem",
										alignSelf: "flex-end",
									}}
									onClick={() => setisopne(true)}
									disableElevation
									variant="contained">
									Process
								</Button>
							</Box>
						</Box>
					</Box>
				</Grid>
			</Grid>
			<Drawer anchor={"right"} open={isopne}>
				<Box width={"70vw"} height={"100%"}>
					<Box
						height={"100%"}
						display={"flex"}
						alignItems={"center"}
						flexDirection={"column"}
						justifyContent={"center"}>
						<Typography variant="h5">You are best suited for</Typography>
						<Typography variant="h2">Data Science Role</Typography>
						<Button
							variant="contained"
							disableElevation
							onClick={() => setisopne(false)}
							sx={{ marginTop: "3rem" }}>
							Close
						</Button>
					</Box>
				</Box>
			</Drawer>
		</div>
	);
}
