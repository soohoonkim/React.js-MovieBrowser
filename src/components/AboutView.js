import Hero from './Hero';

const AboutView = () => {
    return (
        <div>
            <Hero text="About Us" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 my-5">
                        <p className="lead">
                            Deserunt incididunt exercitation ullamco culpa excepteur aliquip do voluptate voluptate ut ex anim. Nisi veniam aliqua irure est tempor adipisicing id consectetur anim deserunt voluptate incididunt. Labore sint dolore irure quis mollit dolore eu qui.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutView;