import font from './font';

export default () => `
.modal-close {
  -moz-appearance: none;
  -webkit-appearance: none;
  background: rgba(17, 17, 17, 0.2);
  border: none;
  border-radius: 290486px;
  cursor: pointer;
  display: inline-block;
  height: 24px;
  position: relative;
  vertical-align: top;
  width: 24px;
  padding: 0;
}

.modal-close:before, .modal-close:after {
  background: #fff;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  margin-left: -25%;
  margin-top: -1px;
  position: absolute;
  top: 50%;
  width: 50%;
}

.modal-close:before {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.modal-close:after {
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

.modal-close:hover {
  background: rgba(17, 17, 17, 0.5);
}

.is-small.modal-close {
  height: 16px;
  width: 16px;
}

.is-medium.modal-close {
  height: 32px;
  width: 32px;
}

.is-large.modal-close {
  height: 40px;
  width: 40px;
}

.modal-close, .tabs {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.modal-background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background: rgba(17, 17, 17, 0.86);
}

.modal-content, .modal-card {
  margin: 0 20px;
  max-height: calc(100vh - 160px);
  overflow: auto;
  position: relative;
  width: 100%;
}

@media screen and (min-width: 769px) {
  .modal-content, .modal-card {
    margin: 0 auto;
    max-height: calc(100vh - 40px);
    width: 640px;
  }
}

.modal-close {
  background: none;
  height: 40px;
  position: fixed;
  right: 20px;
  top: 20px;
  width: 40px;
}

.modal-card {
  background: #fff;
  border-radius: 5px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  max-height: calc(100vh - 40px);
  overflow: hidden;
}

.modal-card-head,
.modal-card-foot {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  background: #f5f7fa;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
          flex-shrink: 0;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  padding: 20px;
  position: relative;
}

.modal-card-head {
  vertical-align: baseline;
  background: transparent;
  border-bottom: 1px solid #d3d6db;
}

.modal-card-title {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
  background: transparent;
  color: #222324;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  font-size: 24px;
  line-height: 1;
}

.modal-card-foot {
  ${font()}
  font-weight: normal;
  vertical-align: baseline;
  border-top: 1px solid #d3d6db;
}

.modal-card-foot .button:not(:last-child) {
  margin-right: 10px;
}

.modal-card-body {
  ${font()}
/* FIXME: 
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
*/
  overflow: auto;
  padding: 20px;
}

.modal {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
              -ms-grid-row-align: center;
          align-items: center;
  display: none;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  overflow: hidden;
  position: fixed;
  z-index: 1986;
}

.modal.is-active {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.modal .delete {
  -moz-appearance: none;
  -webkit-appearance: none;
  background: rgba(17, 17, 17, 0.2);
  border: none;
  border-radius: 290486px;
  cursor: pointer;
  display: inline-block;
  height: 24px;
  position: relative;
  vertical-align: top;
  width: 24px;
  pading: 0;
}

.modal .delete:before, .delete:after {
  background: #fff;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  margin-left: -25%;
  margin-top: -1px;
  position: absolute;
  top: 50%;
  width: 50%;
}

.modal .delete:before {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.modal .delete:after {
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

.modal .delete:hover {
  background: rgba(17, 17, 17, 0.5);
}

.modal .delete.is-small {
  height: 16px;
  width: 16px;
}

.modal .delete.is-medium {
  height: 32px;
  width: 32px;
}

.modal .delete.is-largee {
  height: 40px;
  width: 40px;
}

`;
