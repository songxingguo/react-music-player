import React from 'react'
import Header from './components/header'
import Progress from './components/progress'

let Root = React.createClass({
	getInitialState() {
		return {
			progress: '-'
		}
	},
	componentDidMount() {
		$('#player').jPlayer({
			ready: function () {
				$(this).jPlayer('setMedia', {
					mp3: "http://oj4t8z2d5.bkt.clouddn.com/%E9%A3%8E%E7%BB%A7%E7%BB%AD%E5%90%B9.mp3"
				}).jPlayer('play');
			},
			supplid: 'mp3',
			wmode: 'window'
		});
		$("#jPlayer").bind($.jPlayer.event.timeupdate, (e) =>{
			this.setState({
				progress: Math.round(e.jPlayer.status.currentTime)
			});
		});
	},
	componentWillUnmout() {
		$("#player").unbind($.jPlayer.event.timeupdate);
	},
    render() {
        return (
        	<div>
	        	<Header />
	        	<Progress progress={this.state.progress}>

	        	</Progress>
        	</div>
        );
    }
});

export default Root;
