import Input from '../components/input/input';
import TextArea from '../components/textarea/textarea';

const StartupForm = () => (
  <div className="container">
    <div className="row" style={{ borderTop: '0.1rem solid #DCDEDD' }}>
      <div className="col-md-12">
        <div className="px-2 py-5">
          <h1
            className="h2 text-center"
            style={{ color: '#282828', fontWeight: 400 }}
          >
            Startup Application
          </h1>
          <p className="text-center h5 fw-normal" style={{ color: '#656969' }}>
            Make it easy for investors to learn about your project.
          </p>
        </div>
      </div>
    </div>

    <form className="row w-50 m-auto">
      <div className="col-md-12">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Startup Name
          </label>
          <Input type="text" placeholder="" />
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Web Address
          </label>
          <Input type="text" placeholder="https://" />
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Pitch your Startup in 140 characters
          </label>
          <TextArea />
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Stage of your startup
          </label>
          <div className="d-flex justify-content-between"></div>
        </div>
      </div>
    </form>
  </div>
);

export default StartupForm;
