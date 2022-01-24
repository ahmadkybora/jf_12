import Component from "../../../__JF__/Component";

class Users extends Component {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = this.bootsrap + `
        <p class="text-danger">salam</p>
            <form>
                <div class="row">
                    <div class="offset-md-4 col-md-4">
                        <div class="form-group">
                            <input type="email" class="form-control" name="email" id="email" />
                        </div>
                        <div class="form-group">
                            <input name="first_name" class="form-control" id="first-name" />
                            <input name="last_name" class="form-control" id="last-name" />
                            <input name="username" class="form-control" id="username" />
                        </div>
                    </div>
                </div>
            </form>
        `
    }
}

export default Users