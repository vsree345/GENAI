import React from "react";
import theme from "theme";
import { Theme, Image, Link, Section, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contact"} />
		<Helmet>
			<title>
				Contact | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Contact | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section align-items="center" justify-content="center" padding="16px 0 16px 0" quarkly-title="Header">
			<Override
				slot="SectionContent"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="repeat(2, 1fr)"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				display="grid"
			/>
			<Link href="/" position="relative" transition="opacity 200ms ease" quarkly-title="Link">
				<Image src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-logo.svg?v=2020-11-06T17:26:21.226Z" width="120px" z-index="3" />
			</Link>
			<Components.BurgerMenu md-display="flex" md-align-items="center" md-justify-content="flex-end">
				<Override
					slot="menu"
					lg-transform="translateY(0px) translateX(0px)"
					lg-transition="transform 400ms ease 0s"
					md-position="fixed"
					display="flex"
					md-left={0}
					md-top={0}
					padding="0px 0 0px 0"
					justify-content="center"
					md-width="100%"
					md-height="100%"
					align-items="center"
				>
					<Override
						slot="item"
						text-transform="uppercase"
						text-align="center"
						padding="8px 20px 8px 20px"
						md-padding="16px 40px 16px 40px"
						display="inline-block"
					/>
					<Override slot="item-404" lg-display="none" display="none" />
					<Override slot="item-index" lg-display="none" display="none" />
					<Override
						slot="link"
						transition="opacity .15s ease 0s"
						md-color="--dark"
						md-opacity=".5"
						md-hover-opacity="1"
						md-active-opacity="1"
						color="--dark"
						opacity=".5"
						font="--base"
						letter-spacing="0.5px"
						text-transform="initial"
						md-transition="opacity .15s ease 0s"
						hover-opacity="1"
						md-font="16px/24px sans-serif"
						text-decoration-line="initial"
					/>
					<Override
						slot="link-active"
						md-opacity="1"
						md-cursor="default"
						opacity="1"
						color="--primary"
						cursor="default"
					/>
				</Override>
				<Override slot="icon,icon-close" category="md" icon={MdMenu} />
				<Override
					slot="icon"
					size="36px"
					md-right="0px"
					md-position="relative"
					category="md"
					icon={MdMenu}
				/>
				<Override
					slot="menu-open"
					md-top={0}
					md-bottom={0}
					md-display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
				/>
				<Override slot="icon-open" md-position="fixed" md-top="18px" md-right="18px" />
			</Components.BurgerMenu>
		</Section>
		<Section quarkly-title="Hero" padding="25px 0 75px 0" lg-padding="25px 0 25px 0" justify-content="center">
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
		</Section>
		<Section
			justify-content="center"
			box-sizing="border-box"
			quarkly-title="Contacts"
			padding="50px 0px 50px 0px"
			lg-padding="25px 0px 25px 0px"
		>
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Box
				display="grid"
				grid-gap="82px"
				grid-template-columns="7fr 3fr"
				md-grid-template-columns="1fr"
				md-grid-gap="40px"
				lg-grid-gap="36px"
				width="100%"
			>
				<Box>
					<Box margin="0px 0px 36px 0px" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							Our location
						</Text>
						<Text
							opacity="0.6"
							quarkly-title="Description"
							color="--dark"
							font="--base"
							margin="0px 0px 0px 0px"
							display="inline-block"
						>
							4998, Gachibowli Plaza near Metropolis
						</Text>
					</Box>
					<Box margin="0px 0px 36px 0px" quarkly-title="Working Hours" xl-margin="0px 0px 24px 0px">
						<Text
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
						>
							WORKING HOURS
						</Text>
						<Text
							quarkly-title="Description"
							color="--dark"
							font="--base"
							margin="0px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
						>
							6:00 a.m. - 10:00 p.m.
						</Text>
					</Box>
					<Box quarkly-title="Contact" xl-margin="0px 0px 24px 0px" margin="0px 0px 36px 0px">
						<Text
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
						>
							Contact us
						</Text>
						<Link
							color="--dark"
							quarkly-title="Email"
							white-space="normal"
							hyphens="manual"
							font="--base"
							text-decoration-line="initial"
							hover-text-decoration-line="underline"
							opacity="0.6"
							word-break="normal"
							target="_blank"
							transition="opacity .15s ease 0s"
							text-indent="0"
							text-overflow="clip"
							hover-opacity="0.6"
							href="mailto:hello@company.com"
							overflow-wrap="normal"
						>
							hello@company.com
						</Link>
					</Box>
					<Box margin="0px 0px 36px 0px" quarkly-title="Working Hours" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							Call us
						</Text>
						<Link
							white-space="normal"
							text-overflow="clip"
							hyphens="manual"
							opacity="0.6"
							transition="opacity .15s ease 0s"
							target="_blank"
							display="block"
							text-decoration-line="initial"
							overflow-wrap="normal"
							word-break="normal"
							text-indent="0"
							hover-opacity=".5"
							href="tel:+1(234)567-89-00"
							quarkly-title="Phone"
							color="--dark"
							font="--base"
						>
							+1(234)567-89-00
						</Link>
					</Box>
				</Box>
			</Box>
		</Section>
		<Components.QuarklycommunityKitGoogleMap />
	</Theme>;
});