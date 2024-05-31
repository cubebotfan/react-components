function Gallary(props) {

	return(
		<div className="gallary-background">
			<div className="container gallary">
				{props.gallary.map(image => {
					return (<img className="gallary-entry" key={image.id} src={image.src} alt={image.alt}/>)
				})}
			</div>
		</div>
	)
}

export default Gallary;