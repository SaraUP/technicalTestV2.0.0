import React from 'react';
import DragWrapper from './DragWrapper';
import { ImageNodeWidget} from '../nodes/imagenode/ImageNodeWidget';

class Node extends React.Component {
    renderNode() {
        const {type} = this.props;

        //RDS
        if (type === 'imagenode1') {
            return (
                <div>
                    <ImageNodeWidget node={{ name: 'Image node1' }} displayOnly/>
                </div>
            );
        }

        //ECS
        if (type === 'imagenode2') {
            return (
                <div>
                    <ImageNodeWidget node={{ name: 'Image node2' }} displayOnly/>
                </div>
            );
        }

        //Elastic Load B
        if (type === 'imagenode3') {
            return (
                <div>
                    <ImageNodeWidget node={{ name: 'Image node3' }} displayOnly/>
                </div>
            );
        }

        //Texto editable
        if (type === 'textnode') {
            return (
                <div>
                    <ImageNodeWidget node={{ name: 'Image text' }} displayOnly/>
                </div>
            );
        }
        
        console.warn('Unknown node type');

        return null;
    }

    render() {
        const { type } = this.props;

        return (
            <DragWrapper type={type} style={{ display: 'inline-block' }}>
                {this.renderNode()}
            </DragWrapper>
        );
    }
}

export default Node;