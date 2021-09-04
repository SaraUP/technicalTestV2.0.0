import React from 'react';
import * as RJD from '../../../../lib/main';
import Node from '../../nodes-panel/Node';
import { ImageNodeModel } from './ImageNodeModel';

export class ImageNodeWidget extends React.Component {
  static defaultProps = {
    node: null,
    src: '',
  };

  state = {
    text: ''
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  onRemove() {
    const { node, diagramEngine } = this.props;
    node.remove();
    diagramEngine.forceUpdate();
  }

  getInPort() {
    const { node, color, displayOnly } = this.props;
    let inputNode = node;

    if (displayOnly) {
      inputNode = new ImageNodeModel(node.name, color);
    }

    return inputNode.getInPort ? <RJD.DefaultPortLabel model={inputNode.getInPort()} key='in-port' /> : null;
  }

  getOutPort() {
    const { node, color, displayOnly } = this.props;
    let outputNode = node;

    if (displayOnly) {
      outputNode = new ImageNodeModel(node.name, color);
    }

    return outputNode.getOutPort ? <RJD.DefaultPortLabel model={outputNode.getOutPort()} key='out-port' /> : null;
  }

  //Imagenes AWS según el nodo elegido
  renderElement(){
    const { node, src, displayOnly } = this.props;
    let outputNode = node;
    outputNode = new ImageNodeModel(node.name, src);
    
    if(node.name == "Image Node1"){
      return( 
          <div className="figmaText2">
            <img src="https://cdn.discordapp.com/attachments/725458549865709582/883726964542803998/rds_1.png" height="50%" width="auto"/>
            RDS
          </div>
      );
    } else if(node.name == "Image Node2"){
      return( 
          <div className="figmaText2">
            <img src="https://cdn.discordapp.com/attachments/725458549865709582/883725698479566868/ecs_2_1.png" height="50%" width="auto"/>
            ECS
          </div>
      );
    } else if(node.name == "Image Node3"){
      return( 
          <div className="figmaText2">
            <img src="https://cdn.discordapp.com/attachments/725458549865709582/883731616806092881/elasticload_preview_rev_2-triangle_1.png" height="50%" width="auto"/>
            Elastic Load Balancing
          </div>
      );
    } else if(node.name == "Image Text"){
      return(
       <div className="figmaText">
         <input className="figmaText"
                 type="text"
                 name="text"
                 placeholder="SOME TEXT" 
                 onChange={this.onChange} 
                 value={this.state.text}
          />
        </div>
          
      );
    }
  }

  render() {
    const { node, displayOnly, src } = this.props;
    const { name, color } = node;
    const style = {};

    return (
      <div className='basic-node' style={style}>
        <div className='title'>
          <div className='name'>
            {this.renderElement()}
          </div>
          {!displayOnly ? <div className='fa fa-close' onClick={this.onRemove.bind(this)} /> : null}
        </div>
        <div className='ports'>
          <div className='in'>
            {this.getInPort()}
          </div>
          <div className='out'>
            {this.getOutPort()}
          </div>
        </div>
      </div>
    );
  }
}

export const ImageNodeWidgetFactory = React.createFactory(ImageNodeWidget);
