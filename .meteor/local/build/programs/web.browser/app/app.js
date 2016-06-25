var require = meteorInstall({"client":{"template.main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
// client/template.main.js                                                         //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////
                                                                                   //
                                                                                   // 1
Template.body.addContent((function() {                                             // 2
  var view = this;                                                                 // 3
  return HTML.Raw('<div id="render-target"></div>');                               // 4
}));                                                                               // 5
Meteor.startup(Template.body.renderToDocument);                                    // 6
                                                                                   // 7
/////////////////////////////////////////////////////////////////////////////////////

},"main.jsx":["react","meteor/meteor","react-dom","../imports/ui/App.jsx",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
// client/main.jsx                                                                 //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////
                                                                                   //
var React;module.import('react',{"default":function(v){React=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var render;module.import('react-dom',{"render":function(v){render=v}});var App;module.import('../imports/ui/App.jsx',{"default":function(v){App=v}});
                                                                                   // 2
                                                                                   // 3
                                                                                   //
                                                                                   // 5
                                                                                   //
Meteor.startup(function () {                                                       // 7
	render(React.createElement(App, null), document.getElementById('render-target'));
});                                                                                // 9
/////////////////////////////////////////////////////////////////////////////////////

}]},"imports":{"api":{"tasks.js":["meteor/mongo",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
// imports/api/tasks.js                                                            //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////
                                                                                   //
module.export({Tasks:function(){return Tasks}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                   //
var Tasks = new Mongo.Collection('tasks');                                         // 3
/////////////////////////////////////////////////////////////////////////////////////

}]},"ui":{"App.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/react-meteor-data","../api/tasks.js","./Task.jsx",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
// imports/ui/App.jsx                                                              //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////
                                                                                   //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var Tasks;module.import('../api/tasks.js',{"Tasks":function(v){Tasks=v}});var Task;module.import('./Task.jsx',{"default":function(v){Task=v}});
                                                                                   //
                                                                                   //
                                                                                   // 1
                                                                                   // 2
                                                                                   // 3
                                                                                   //
                                                                                   // 5
                                                                                   //
                                                                                   // 7
                                                                                   //
var App = function (_Component) {                                                  //
	_inherits(App, _Component);                                                       //
                                                                                   //
	function App() {                                                                  //
		_classCallCheck(this, App);                                                      //
                                                                                   //
		return _possibleConstructorReturn(this, _Component.apply(this, arguments));      //
	}                                                                                 //
                                                                                   //
	App.prototype.handleSubmit = function () {                                        //
		function handleSubmit(event) {                                                   //
			event.preventDefault();                                                         // 11
                                                                                   //
			var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();              // 13
                                                                                   //
			Tasks.insert({                                                                  // 15
				text: text,                                                                    // 16
				createdAt: new Date()                                                          // 17
			});                                                                             // 15
                                                                                   //
			ReactDOM.findDOMNode(this.refs.textInput).value = '';                           // 20
		}                                                                                // 21
                                                                                   //
		return handleSubmit;                                                             //
	}();                                                                              //
                                                                                   //
	App.prototype.renderTasks = function () {                                         //
		function renderTasks() {                                                         //
			return this.props.tasks.map(function (task) {                                   // 24
				return React.createElement(Task, { key: task._id, task: task });               // 24
			});                                                                             // 24
		}                                                                                // 27
                                                                                   //
		return renderTasks;                                                              //
	}();                                                                              //
                                                                                   //
	App.prototype.render = function () {                                              //
		function render() {                                                              //
			return React.createElement(                                                     // 30
				'div',                                                                         // 31
				{ className: 'container' },                                                    // 31
				React.createElement(                                                           // 32
					'header',                                                                     // 32
					null,                                                                         // 32
					React.createElement(                                                          // 33
						'h1',                                                                        // 33
						null,                                                                        // 33
						' Todo List '                                                                // 33
					),                                                                            // 33
					React.createElement(                                                          // 34
						'form',                                                                      // 34
						{ className: 'new-task', onSubmit: this.handleSubmit.bind(this) },           // 34
						React.createElement('input', {                                               // 35
							type: 'text',                                                               // 36
							ref: 'textInput',                                                           // 37
							placeholder: 'Type to add new tasks'                                        // 38
						})                                                                           // 35
					)                                                                             // 34
				),                                                                             // 32
				React.createElement(                                                           // 43
					'ul',                                                                         // 43
					null,                                                                         // 43
					this.renderTasks()                                                            // 44
				)                                                                              // 43
			);                                                                              // 31
		}                                                                                // 48
                                                                                   //
		return render;                                                                   //
	}();                                                                              //
                                                                                   //
	return App;                                                                       //
}(Component);                                                                      //
                                                                                   //
App.PropTypes = {                                                                  // 51
	tasks: PropTypes.array.isRequired                                                 // 52
};                                                                                 // 51
                                                                                   //
module.export("default",exports.default=(createContainer(function () {             // 55
	return {                                                                          // 56
		tasks: Tasks.find({}).fetch()                                                    // 57
	};                                                                                // 56
}, App)));                                                                         // 59
/////////////////////////////////////////////////////////////////////////////////////

}],"Task.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
// imports/ui/Task.jsx                                                             //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////
                                                                                   //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});
                                                                                   //
                                                                                   //
                                                                                   // 1
                                                                                   //
var Task = function (_Component) {                                                 //
	_inherits(Task, _Component);                                                      //
                                                                                   //
	function Task() {                                                                 //
		_classCallCheck(this, Task);                                                     //
                                                                                   //
		return _possibleConstructorReturn(this, _Component.apply(this, arguments));      //
	}                                                                                 //
                                                                                   //
	Task.prototype.render = function () {                                             //
		function render() {                                                              //
			return React.createElement(                                                     // 5
				'li',                                                                          // 6
				null,                                                                          // 6
				this.props.task.text                                                           // 6
			);                                                                              // 6
		}                                                                                // 8
                                                                                   //
		return render;                                                                   //
	}();                                                                              //
                                                                                   //
	return Task;                                                                      //
}(Component);                                                                      //
                                                                                   //
module.export("default",exports.default=(Task));                                   //
                                                                                   //
                                                                                   //
Task.PropTypes = {                                                                 // 11
	task: PropTypes.object.isRequired                                                 // 12
};                                                                                 // 11
/////////////////////////////////////////////////////////////////////////////////////

}]}}},{"extensions":[".js",".json",".html",".jsx",".css"]});
require("./client/template.main.js");
require("./client/main.jsx");