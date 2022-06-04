const AppRouter = () => (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={App} path="/" exact={true} />
            <Route component={FilesList} path="/list" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
  
  export default AppRouter;