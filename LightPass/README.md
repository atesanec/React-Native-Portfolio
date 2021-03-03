# LightPass

## Product Description

Cross-platform app to smart access administration and provision system. 
It allows to manage Workspace, the space where Users, Passes and Doors interact with each other. App also renders pass as a sequence of color flashes that are recognised by 
the sensor on a door. Door's hardware operations like upgrading firmware are also managed through the app.

App development and distribution environment was chosen as Expo, ejected because of required BLE functionality.

## Portfolio Sample

This example demonstrates the implementation of screens that work with Users.

### Architecture
Architecture of the project was chosen as Redux + thunk middleware, with code on Javascript.

This way, these are the main components:
1. Redux Store. Keeps state. In this app there are multiple stores, one for each Workspace and one global
2. Components. Stateless elements. For UI the React Native Paper dependency is used
3. Router. Allows navigating between screens using ConnectedRouter
4. Redux Forms. Provide UI and validation logic for app forms using redux-form
5. Containers. Connected to Store elements that can dispatch
6. Redux Actions. Do dispatches, mostly with async logic
7. Redux Reducers. Update the Store state with payload dispathed by specified action

