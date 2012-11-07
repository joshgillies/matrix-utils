#Matrix Utilities

This projects aim is to streamline some of the processes that go into working with and developing for Squiz Matrix.

##Features (current):

None. DOH!

##Features (future):

*Note:* The below list of features are listed as a TODO list than anything else.

**Designs:**

* Easy project initialization.
* Streamlined authoring of Matrix design parse files.
* Concise syntax for MySource specific code blocks.
* Utilization of emerging web technologies: Jade, LESS and Stylus (possibly).
* Author designs from the ground up to include MySource code blocks, a build step will determin whether these are compiled or not.

**Testing:**

* Testing server out of the box, useful for testing static designs. Pre-Matrix testing.
* Live reload.
* Test against jade/less assets, no need to add a compile step before testing.

**Deployment:**

* Various build options for deployment eg. build static, build parse, build nested, build archive, etc.

**TODO:**

* Write mixins for MySource specific code blocks (eg. MySource_Area, MySource_Asset, etc).
* Write mixins for MySource specific tags (eg. MySource_Print, MySource_Set, MySource_Declare, etc).
* Work out how to in-line tags as values to attributes using Jade (eg. <a href="<MySource_PRINT var="asset_link"/>">)