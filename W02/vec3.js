// Constructor
Vec3 = function(x,y,z)
{
    //"use strict";
    this.x = x;
    this.y = y;
    this.z = z;
}
// Add method
Vec3.prototype.add = function(v)
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}
//Sum method
Vec3.prototype.sum = function()
{
    return this.x + this.y + this.z;
}
//Min method
Vec3.prototype.min = function()
{
    return Math.min(this.x, this.y, this.z);
}
//Max method
Vec3.prototype.max = function()
{
    return Math.max(this.x, this.y, this.z);
}
//Mid method
Vec3.prototype.mid = function()
{
    smallest =  Math.min(this.x, this.y, this.z);
    biggest = Math.max(this.x, this.y, this.z);
    if (this.x != biggest && this.x != smallest) {
      return this.x;
    }else if (this.y != biggest && this.y != smallest) {
      return this.y;
    }else {
      return this.z;
    }
}

//CalcArea method
/*Vec3.prototype.AreaOfTriangle(v0,v1,v2)
{
    var v10 = new Vec3(v1.x-v0.x, v1.y-v0.y, v1.z-v0.z);
    var v21 = new Vec3.(v2.x-v1.x, v2.y-v1.y, v2.z-v1.z);
    vecx = v10.y*v21.z - v10.z*v21.y;
    vecy = v10.z*v21.x - v10.x*v21.z;
    vecz = v10.x*v21.y - v10.y*v21.x;
    S = Math.sqrt(Math.pow(vecx,2) + Math.pow(vecy,2) + Math.pow(vecz,2))/2;
    return S;
}*/
