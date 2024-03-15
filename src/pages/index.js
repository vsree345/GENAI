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
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Home | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Home | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="16px 0 16px 0" quarkly-title="Header" align-items="center" justify-content="center">
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="repeat(2, 1fr)"
				margin="0px 32px 0px 32px"
				width="100%"
				md-display="inline-block"
				md-position="fixed"
			/>
			<Link transition="opacity 200ms ease" quarkly-title="Link" href="/" position="relative">
				<Image src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-logo.svg?v=2020-11-06T17:26:21.226Z" width="120px" z-index="3" />
			</Link>
			<Components.BurgerMenu md-display="flex" md-align-items="center" md-justify-content="flex-end">
				<Override slot="icon-open" md-position="fixed" md-top="18px" md-right="18px" />
				<Override
					slot="menu"
					md-top={0}
					md-width="100%"
					justify-content="center"
					lg-transition="transform 400ms ease 0s"
					md-position="fixed"
					display="flex"
					md-left={0}
					lg-transform="translateY(0px) translateX(0px)"
					md-height="100%"
					padding="0px 0 0px 0"
					align-items="center"
				>
					<Override
						slot="item"
						md-padding="16px 40px 16px 40px"
						display="inline-block"
						text-transform="uppercase"
						text-align="center"
						padding="8px 20px 8px 20px"
					/>
					<Override slot="item-404" lg-display="none" display="none" />
					<Override slot="item-index" lg-display="none" display="none" />
					<Override
						slot="link"
						md-hover-opacity="1"
						md-active-opacity="1"
						md-color="--dark"
						font="--base"
						text-transform="initial"
						md-font="16px/24px sans-serif"
						text-decoration-line="initial"
						color="--dark"
						transition="opacity .15s ease 0s"
						letter-spacing="0.5px"
						md-opacity=".5"
						md-transition="opacity .15s ease 0s"
						opacity=".5"
						hover-opacity="1"
					/>
					<Override
						slot="link-active"
						md-opacity="1"
						md-cursor="default"
						opacity="1"
						color="--primary"
						cursor="default"
					/>
					<Override slot="link-team">
						Services
					</Override>
					<Override slot="link-about">
						Home
					</Override>
					<Override slot="link-work">
						About
					</Override>
				</Override>
				<Override slot="icon,icon-close" category="md" icon={MdMenu} />
				<Override
					slot="icon"
					category="md"
					icon={MdMenu}
					size="36px"
					md-right="0px"
					md-position="relative"
				/>
				<Override
					slot="menu-open"
					md-justify-content="center"
					md-top={0}
					md-bottom={0}
					md-display="flex"
					md-flex-direction="column"
					md-align-items="center"
				/>
			</Components.BurgerMenu>
		</Section>
		<Section />
		<Section
			padding="40px 0 40px 0"
			background="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1500&q=80) center center/cover no-repeat"
			min-height="100vh"
			lg-padding="80px 0 80px 0"
			md-padding="96px 0 96px 0"
			sm-padding="72px 0 96px 0"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				justify-content="center"
				align-items="center"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-margin="0px 0px 40px 0px"
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				md-position="absolute"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--light"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
					width="80%"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					sm-width="100%"
					md-position="absolute"
				>
					Online Criminal Detection System
				</Text>
				<Text
					margin="0px 0px 32px 0px"
					color="#FFFFFF"
					font="--lead"
					lg-text-align="center"
					text-align="center"
				>
					The things u cant see
				</Text>
				<Link
					href="/work"
					padding="12px 24px 12px 24px"
					color="--dark"
					background="--color-secondary"
					text-decoration-line="initial"
					font="--lead"
					border-radius="8px"
					margin="0px 0px 0px 0px"
					transition="background-color 0.2s ease-in-out 0s"
					hover-background="--color-orange"
					sm-margin="0px 0px 0px 0px"
					sm-text-align="center"
					hover-transition="background-color 0.2s ease-in-out 0s"
				>
					Get Started
				</Link>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 0px"
				justify-content="center"
				lg-order="1"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					We see what you dont see!!!
				</Text>
				<Text margin="0px 0px 40px 0px" color="--greyD3" font="--lead" lg-text-align="center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
				<Link
					href="/about"
					padding="12px 24px 12px 24px"
					color="--light"
					text-decoration-line="initial"
					font="--lead"
					border-radius="8px"
					margin="0px 16px 0px 0px"
					transition="background-color 0.2s ease-in-out 0s"
					sm-margin="0px 0px 16px 0px"
					sm-text-align="center"
					background="--color-green"
					hover-transition="background-color 0.2s ease-in-out 0s"
					hover-background="--color-primary"
				>
					Get Started
				</Link>
			</Box>
			<Box
				display="flex"
				width="50%"
				justify-content="flex-end"
				lg-width="100%"
				align-items="flex-start"
				lg-margin="0px 0px 32px 0px"
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 32px"
				lg-padding="0px 0px 0px 0px"
				lg-justify-content="center"
			>
				<Image
					src="https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=800&q=80"
					object-fit="cover"
					width="100%"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					min-height="600px"
					max-width="480px"
					sm-min-height="100vw"
					srcSet="https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
				/>
			</Box>
		</Section>
	</Theme>;
});