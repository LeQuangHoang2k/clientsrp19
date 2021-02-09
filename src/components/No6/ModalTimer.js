import React from "react";

function ModalTimer(props) {
  return (
    <div>
      <div id="timer" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <h4 class="modal-title">Timer</h4>
            </div>
            <div class="modal-body">
              <form action="" method="POST" role="form">
                <div class="form-group">
                  <label for="no6__content">Content</label>
                  <input
                    type="text"
                    class="form-control"
                    id="no6__content"
                    placeholder=""
                  />
                  <br />

                  <label for="no6__datetime">Date & time (*)</label>
                  <input
                    type="datetime-local"
                    class="form-control"
                    id="no6__datetime"
                    placeholder="Input field"
                  />
                  <br />

                  <label for="input" class="control-label">
                    Repeat
                  </label>
                  <select
                    name="no6__repeat"
                    id="input"
                    class="form-control"
                    required="required">
                    <option value="none">None</option>
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                  </select>
                  <br />

                  <label for="no6__term">Term</label>
                  <input
                    type="datetime-local"
                    class="form-control"
                    id="no6__term"
                    placeholder=""
                  />
                  <br />
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" class="btn btn-danger">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalTimer;
