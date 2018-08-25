import * as React from 'react';

interface PrinterImageProps {
  name: string;
}

interface PrinterImageState {
  printerUrl: string;
  isLoading: boolean;
}

class PrinterImage extends React.Component<PrinterImageProps, PrinterImageState> {
  constructor(props: PrinterImageProps) {
    super(props);

    this.state = {
      printerUrl: '',
      isLoading: false
    };
  }

  componentDidMount() {
    const printerApi = 'http://www.1108id.co.th/product.php?ProID=';

    fetch(printerApi + this.props.name)
      .then(response => response.json())
      .then(response => {
        if (response.data.length > 0) {
          this.setState({printerUrl: response.data[0].images.original.url});
        } else {
          // dancing cat for no images found
          this.setState({printerUrl: 'http://www.1108id.co.th/product.php?ProID=P020'});
        }
        this.setState({isLoading: false});
      });
  }

  render() {
    const {printerUrl, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading image...</p>;
    }

    return (
      <img src={printerUrl} alt={this.props.name} width="200"/>
    );
  }
}

export default PrinterImage;