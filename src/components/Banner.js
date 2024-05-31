import Button from "./Button";
function Banner(props) {

	return(
		<div className="banner mt-100">
			<div className="container">
				<h2>{props.title}</h2>
				<p>{props.text}</p>
				<div className="banner-buttons">
						<Button
							text={props.button1text}
							link={props.button1link}
						/>
						<Button
							secondary="true"
							text={props.button2text}
							link={props.button2link}
						/>
				</div>
			</div>
		</div>
	)
}

export default Banner;