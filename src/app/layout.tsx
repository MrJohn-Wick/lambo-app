function Layout(props: any) {
  return (
    <html>
      <body>
        <main>{props.children}</main>
      </body>
    </html>
  )
}

export default Layout;
