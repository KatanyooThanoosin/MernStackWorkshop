const FormComponent = () => {
    return (
        <div className="container p-5">
          <h1>Write New Blog</h1>
          <form>
            <div className="form-group">
                <label>Blog Name</label>
                <input type='text' className = "form-control"/>
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea className = "form-control"></textarea>
            </div>
            <div className="form-group">
                <label>Author</label>
                <input type="text" className = "form-control"></input>
            </div>
            <input type="submit" value="submit" className = "btn btn-primary"/>
            <a className="btn btn-success" href="/">Home</a>
          </form>
        </div>
      );
}

export default FormComponent;