#Matrix Utilities

This projects aim is to streamline some of the processes that go into working with and developing for Squiz Matrix.

##Goals

*Note:* The below list of features are listed as a TODO list than anything else.

**Designs:**

* Easy project initialization. (H5BP or Bootstrap we've got you covered)
* Streamlined authoring of Matrix design parse files.
* Concise syntax for MySource specific code blocks (see example below).
* Utilization of emerging web technologies: Jade, LESS and Stylus (possibly).
* Author designs from the ground up to include MySource code blocks, a build step will determin whether these are compiled or not.

**Testing:**

* Testing server out of the box, useful for testing static designs. Pre-Matrix testing.
* Live reload.
* Test against jade/less assets, no need to add a compile step before testing.

**Deployment:**

* Various build options for deployment eg. build static, build parse, build nested, build archive, etc.

**TODO:**

* ~~Write mixins for MySource specific code blocks (eg. MySource_Area, MySource_Asset, etc).~~
* ~~Write mixins for MySource specific tags (eg. MySource_Print, MySource_Set, MySource_Declare, etc).~~
* ~~MySource_AREAs can be self closing, need to look into making that happen with the `+area` mixin.~~
* Write tests for above.
* Work out how to in-line tags as values to attributes using Jade (eg. `<a href="<MySource_PRINT var="asset_link"/>">`)

**Syntax Example:**

New:
```jade
+area#main_menu(design_area='menu_normal')
  +set(name='level', value='sub')
  +set(name='show_subs', value='always')
  ul#global_nav
    +asset
      li
        +print(var='asset_name_linked')
        +sub
          ul
            +asset
              li
                +print(var='asset_name_linked')
```

Old:
```html
<MySource_AREA id_name="main_menu" design_area="menu_normal">
  <MySource_SET name="level" value="sub"/>
  <MySource_SET name="show_subs" value="always"/>
  <ul id="global_nav">
    <MySource_ASSET>
      <li>
        <MySource_PRINT var="asset_name_linked"/>
        <MySource_SUB design_area="menu_normal">
          <ul>
            <MySource_ASSET>
              <li>
                <MySource_PRINT var="asset_name_linked"/>
              </li>
            </MySource_ASSET>
          </ul>
        </MySource_SUB>
      </li>
    </MySource_ASSET>
  </ul>
</MySource_AREA>
```