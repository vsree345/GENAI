import React from "react";
import theme from "theme";
import { Theme, Image, Link, Section, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"work"} />
		<Helmet>
			<title>
				Work | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Work | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="Header" align-items="center" justify-content="center" padding="16px 0 16px 0">
			<Override
				slot="SectionContent"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="repeat(2, 1fr)"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
			/>
			<Link href="/" position="relative" transition="opacity 200ms ease" quarkly-title="Link">
				<Image src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-logo.svg?v=2020-11-06T17:26:21.226Z" width="120px" z-index="3" />
			</Link>
			<Components.BurgerMenu md-display="flex" md-align-items="center" md-justify-content="flex-end">
				<Override
					slot="menu"
					md-width="100%"
					align-items="center"
					justify-content="center"
					lg-transition="transform 400ms ease 0s"
					md-position="fixed"
					display="flex"
					md-top={0}
					lg-transform="translateY(0px) translateX(0px)"
					md-left={0}
					md-height="100%"
					padding="0px 0 0px 0"
				>
					<Override
						slot="item"
						padding="8px 20px 8px 20px"
						md-padding="16px 40px 16px 40px"
						display="inline-block"
						text-transform="uppercase"
						text-align="center"
					/>
					<Override slot="item-404" lg-display="none" display="none" />
					<Override slot="item-index" lg-display="none" display="none" />
					<Override
						slot="link"
						md-color="--dark"
						md-font="16px/24px sans-serif"
						letter-spacing="0.5px"
						md-opacity=".5"
						font="--base"
						text-decoration-line="initial"
						color="--dark"
						opacity=".5"
						md-active-opacity="1"
						transition="opacity .15s ease 0s"
						md-transition="opacity .15s ease 0s"
						md-hover-opacity="1"
						hover-opacity="1"
						text-transform="initial"
					/>
					<Override
						slot="link-active"
						opacity="1"
						color="--primary"
						cursor="default"
						md-opacity="1"
						md-cursor="default"
					/>
				</Override>
				<Override slot="icon,icon-close" category="md" icon={MdMenu} />
				<Override
					slot="icon"
					md-position="relative"
					category="md"
					icon={MdMenu}
					size="36px"
					md-right="0px"
				/>
				<Override
					slot="menu-open"
					md-bottom={0}
					md-display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					md-top={0}
				/>
				<Override slot="icon-open" md-position="fixed" md-top="18px" md-right="18px" />
			</Components.BurgerMenu>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				width="50%"
				lg-width="100%"
				lg-display="flex"
				lg-justify-content="center"
				padding="0px 16px 0px 0px"
				lg-padding="0px 0px 0px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					position="absolute"
					left="140px"
					right="auto"
					width="100px"
					top="417px"
					bottom="auto"
					height="100px"
				>
					<Link href="#" color="#000000">
						Click Here
					</Link>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					position="absolute"
					left="392px"
					right="auto"
					width="100px"
					top="341px"
					bottom="auto"
					height="100px"
				>
					<Link href="#" color="#000000">
						Click Here
					</Link>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					position="absolute"
					left="384px"
					right="auto"
					width="100px"
					top="auto"
					bottom="253px"
					height="100px"
				>
					<Link href="#" color="#000000">
						Click Here
					</Link>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					position="absolute"
					left="130px"
					right="auto"
					width="100px"
					top="auto"
					bottom="329px"
					height="100px"
				>
					<Link href="#" color="#000000">
						Click Here
					</Link>
				</Box>
				<Box
					display="grid"
					grid-template-rows="repeat(9, 60px)"
					grid-template-columns="repeat(2, 1fr)"
					grid-gap="16px"
					max-width="480px"
					lg-margin="0px 0px 16px 0px"
					sm-grid-template-rows="repeat(9, 10vw)"
				>
					<Image
						src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
						border-radius="24px"
						object-fit="cover"
						width="100%"
						grid-row="1 / span 5"
						grid-column="1 / span 1"
						height="100%"
						srcSet="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
					/>
					<Image
						src="https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=800&q=80"
						border-radius="24px"
						object-fit="cover"
						grid-column="2 / span 1"
						grid-row="2 / span 3"
						width="100%"
						height="100%"
						srcSet="https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
					/>
					<Image
						src="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=800&q=80"
						border-radius="24px"
						object-fit="cover"
						width="100%"
						grid-column="1 / span 1"
						grid-row="6 / span 3"
						height="100%"
						srcSet="https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1489493585363-d69421e0edd3?auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
					/>
					<Image
						src="https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=800&q=80"
						border-radius="24px"
						object-fit="cover"
						width="100%"
						grid-column="2 / span 1"
						grid-row="5 / span 5"
						height="100%"
						srcSet="https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1538681105587-85640961bf8b?auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 479px) 100vw,(max-width: 767px) 100vw,(max-width: 991px) 100vw,(max-width: 1199px) 100vw,100vw"
					/>
				</Box>
			</Box>
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-align-items="center"
				sm-margin="20px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 0px 16px 16px"
				lg-width="100%"
				lg-padding="24px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Our Services
				</Text>
				<Text margin="0px 0px 0px 0px" color="--greyD3" font="--lead" lg-text-align="center">
					Help us achieve the peace that we all deserve{" "}
				</Text>
			</Box>
		</Section>
	</Theme>;
});