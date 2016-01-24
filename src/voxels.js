var GL = null,
    voxels;

voxels = {

  init() {
    this.body = document.body;
    this.canvas = document.createElement("canvas");
    this.body.appendChild(this.canvas);

    try {
      GL = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');
    } catch (error) {}

    if (!GL) {
      GL = null;
      alert("no WebGL");
    }

    if (GL) {
      GL.clearColor(0, 0, 0, 1);
      GL.enable(GL.DEPTH_TEST);
      GL.depthFunc(GL.LEQUAL);
      GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
      GL.viewport(0, 0, this.canvas.width, this.canvas.height);
    }
  }

};
