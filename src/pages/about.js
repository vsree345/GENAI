import React from "react";
import theme from "theme";
import { Theme, Image, Link, Button, Section, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about"} />
		<Helmet>
			<title>
				About | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"About | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="Header" align-items="center" justify-content="center" padding="16px 0 16px 0">
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="repeat(2, 1fr)"
				margin="0px 32px 0px 32px"
				width="100%"
			/>
			<Link position="relative" transition="opacity 200ms ease" quarkly-title="Link" href="/">
				<Image z-index="3" src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-logo.svg?v=2020-11-06T17:26:21.226Z" width="120px" />
			</Link>
			<Components.BurgerMenu md-display="flex" md-align-items="center" md-justify-content="flex-end">
				<Override
					slot="icon"
					icon={MdMenu}
					size="36px"
					md-right="0px"
					md-position="relative"
					category="md"
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
				<Override slot="icon-open" md-right="18px" md-position="fixed" md-top="18px" />
				<Override
					slot="menu"
					md-height="100%"
					justify-content="center"
					lg-transition="transform 400ms ease 0s"
					md-position="fixed"
					display="flex"
					md-top={0}
					md-width="100%"
					lg-transform="translateY(0px) translateX(0px)"
					md-left={0}
					padding="0px 0 0px 0"
					align-items="center"
				>
					<Override slot="item-index" lg-display="none" display="none" />
					<Override
						slot="link"
						hover-opacity="1"
						md-transition="opacity .15s ease 0s"
						md-font="16px/24px sans-serif"
						font="--base"
						color="--dark"
						opacity=".5"
						transition="opacity .15s ease 0s"
						text-transform="initial"
						md-color="--dark"
						letter-spacing="0.5px"
						md-opacity=".5"
						md-hover-opacity="1"
						md-active-opacity="1"
						text-decoration-line="initial"
					/>
					<Override
						slot="link-active"
						opacity="1"
						color="--primary"
						cursor="default"
						md-opacity="1"
						md-cursor="default"
					/>
					<Override
						slot="item"
						text-align="center"
						padding="8px 20px 8px 20px"
						md-padding="16px 40px 16px 40px"
						display="inline-block"
						text-transform="uppercase"
					/>
					<Override slot="item-404" lg-display="none" display="none" />
					<Override slot="link-image-detection">
						Image Detection
					</Override>
				</Override>
				<Override slot="icon,icon-close" category="md" icon={MdMenu} />
			</Components.BurgerMenu>
			<Button
				hover-transform="translateY(-4px)"
				font="--base"
				z-index="5"
				md-display="none"
				white-space="nowrap"
				border-radius="0px"
				padding="8px 18px 8px 18px"
				letter-spacing="0.5px"
				background="--color-primary"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
				justify-self="end"
			>
				Contact Us
			</Button>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 0px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
				md-margin="0px 0px 30px 0px"
			>
				<Image
					max-width="340px"
					src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23:20:31.207Z"
					md-margin="0px 0px 20px 0px"
					srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23%3A20%3A31.207Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23%3A20%3A31.207Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23%3A20%3A31.207Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23%3A20%3A31.207Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23%3A20%3A31.207Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23%3A20%3A31.207Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23%3A20%3A31.207Z&quality=85&w=3200 3200w"
					sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
				/>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
			>
				<Text margin="0px 0px 40px 0px" color="--dark" font="--headline2" md-margin="0px 0px 30px 0px">
					Our Mission Statement
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="--base">
					Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam sapien convallis eu. Nulla ut turpis in diam dapibus consequat.
				</Text>
				<Text margin="0px 0px 0px 0px" color="--darkL2" font="--base">
					Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam sapien convallis eu. Nulla ut turpis in diam dapibus consequat.
				</Text>
			</Box>
		</Section>
	</Theme>;
});