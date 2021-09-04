import React from 'react';
import Node from './Node';

class NodesPanel extends React.Component {
    //Diseño AWS
    render() {
        return (
            <div>
                <div className="figmaText"> 
                    <div className="nodes-panel">
                    <div className='node-wrapper'>
                        <div className='basic-node'>
                            <Node type='textnode'/>
                        </div>
                    </div>
                    </div>
                    <hr width="70%"></hr>
                </div>
                <div className="panel-wrapper">
                <div className="nodes-panel1">
                        <div className='node-wrapper'>
                            <div className='basic-node'>
                                <Node type='imagenode1'/>
                            </div>
                        </div>
                    <p className="figmaText2">RDS</p>
                    {/* RDS */}
                </div>
            </div>
            <div className="panel-wrapper">
                <div className="nodes-panel2">
                    <div className='node-wrapper'>
                    <div className='basic-node2'>
                                <Node type='imagenode2'/>
                            </div>
                    </div>
                    <p className="figmaText2">EC2</p>
                    {/* EC2 */}
                </div>
            </div>
            <div className="panel-wrapper">
                <div className="nodes-panel3">
                    <div className='node-wrapper'>
                    <div className='basic-node3'>
                        <Node type='imagenode3'/>
                    </div>
                    </div>
                    <p className="figmaText2">Elastic Load Balancing</p>
                    {/* Elastic Load Balancing */}
                </div>
            </div>
            </div>
        );
    }
}

export default NodesPanel;