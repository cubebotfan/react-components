function Button(props) {

	return( /* Button tag sucks from what I remember so just use a div*/
	/* Do I need a div if I can just style an a tag to be a div instead?*/
		<a className={'button'+(props.secondary? " secondary": "")} href={props.link}>
			<p>{props.text}</p>
		</a>
	)
}

export default Button;