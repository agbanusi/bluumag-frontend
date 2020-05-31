import MenuAppBar from './AppBar';
function Layout(props) {
    const { children } = props
    return (
        <>

            <div>{children}</div>
        </>
    )
}

export default Layout;