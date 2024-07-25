import classes from "./HelloWorld.module.css"



let name="Gabriel";

function Index(props) {
    return(
        <div>
    <header>
        <nav>
            <div>
                <h1>Titulo da página</h1>
            </div>
            <div>
                <ul className={classes.linksUl}>
                    <li><a href="">link 1</a></li>
                    <li><a href="">link 2</a></li>
                    <li><a href="">link 3</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <h1 className={classes.title}>Olá {props.name}</h1>
    </main>

    <footer>
        <p>Todos os direitos reservados</p>
    </footer>
    </div>
    )
}

export default Index