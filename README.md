# React

* :heavy_check_mark: What is React?
* :heavy_check_mark: Skeleton Code
  * `npx create-react-app`
* :heavy_check_mark: Introduction
  * JSX
  * Export and Import
* :heavy_check_mark: Parent/Child Components
* :heavy_check_mark: Component Hierarchy
* Props
  * UNIDIRECTIONAL data flow - data flows from the top of a component tree to the bottom, data cannot flow back up the component tree
  * Data that does not change over the lifetime of the component should be considered as props
  * Data that can change should be considered a state, state should be the single source of truth for changing data. State should be the highest common component of those that require the data.
  * Props are a way of passing data from parent to child, once set they are immutable within the component - the only way to change it is by re-rendering the parent
  * Receiving and using props
  * Default Props
  * Prop Types
* State
  * Hooks (`useState()`)
  * Adding and Updating
* Forms and Events
* Lifting State (Inverse Data Flow)
* Working with external Data
  * Hooks in more detail
  * `useEffect()`
* Router
  * `npm install react-router-dom`
* Data Requests
  * Axios
  * `useHistory()`
* Testing
  * JEST
