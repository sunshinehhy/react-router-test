
To run this example:

  `npm install`

  `npm start`

 open [http://localhost:8000/](http://localhost:8000/) in the browser

 http://redux.js.org/ 

 ## Context

 With React, it’s easy to track the flow of data through your React components. When you look at a component, you can see which props are being passed, which makes your apps easy to reason about.

In some cases, you want to pass data through the component tree without having to pass the props down manually at every level. You can do this directly in React with the powerful “context” API.

对于react，很容易通过您的React components跟踪数据流。当你查看一个组件时，你可以看到哪些props正在被通过，这使得你的应用程序很容易推理。

在某些情况下，您希望通过组件树传递数据，而不需要在每个级别手动传递这些数据。您可以直接与强大的“上下文”API进行交互。

**Why Not To Use Context**

The vast majority of applications do not need to use context.

If you want your application to be stable, don’t use context. It is an experimental API and it is likely to break in future releases of React.

If you aren’t familiar with state management libraries like Redux or MobX, don’t use context. For many practical applications, these libraries and their React bindings are a good choice for managing state that is relevant to many components. It is far more likely that Redux is the right solution to your problem than that context is the right solution.

If you’re still learning React, don’t use context. There is usually a better way to implement functionality just using props and state.

If you insist on using context despite these warnings, try to isolate your use of context to a small area and avoid using the context API directly when possible so that it’s easier to upgrade when the API changes.

绝大多数应用程序不需要使用context。

如果您希望应用程序保持稳定，请不要使用context。它是一个实验性的API，它很可能在未来的反应版本中被打破。

如果您不熟悉像Redux或MobX这样的状态管理库，请不要使用context。对于许多实际应用程序来说，这些库及其React绑定是管理与许多组件相关的状态的良好选择。更有可能的是，Redux是解决问题的正确方法，而context不是正确的解决方案。

如果你还在学习React，不要使用context。通常有一种更好的方法来使用道具和状态来实现功能。

尽管有这些警告，如果您坚持使用context，尝试将您的上下文使用隔离到一个小区域，并在可能的情况下避免直接使用context API，以便在API更改时更容易升级。

