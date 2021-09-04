import _ from 'lodash';
import * as RJD from '../../../../lib/main';

export class ImageNodeModel extends RJD.NodeModel {
  constructor(name = 'Untitled', src = "", content) {
    super('imagenode');
    this.addPort(new RJD.DefaultPortModel(false, 'output', 'Out'));
    this.addPort(new RJD.DefaultPortModel(true, 'input', 'In'));
    this.name = name;
    this.src = src;
    this.content = content;
  }

  deSerialize(object) {
    super.deSerialize(object);
    this.name = object.name;
    this.src = object.src;
    this.content = object.content;
  }

  serialize() {
    return _.merge(super.serialize(), {
      name: this.name,
      src: this.src,
      content: this.content
    });
  }

  getInPort() {
    return this.ports.input;
  }

  getOutPort() {
    return this.ports.output;
  }
}
