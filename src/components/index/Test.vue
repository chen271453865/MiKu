<template>
    <div class="form-group">
        <label class="col-md-2 control-label">
            {{label}} <template required><span style="color:red">*</span></template>
        </label>
        <div class="col-md-8" v-if="type === 'text'">
            <input :type="type" :maxlength="maxlength" :name="id" class="form-control" :id="id" v-model="formModel" :placeholder="label" />
        </div>
    </div>
</template>
<style>
</style>
<script>
    export default{
        props:{
            id: String,
            label: String,
            type:{
                type: String,
                default: 'text'
            }
        },
        computed:{
          formModel: {
              get(){
                  console.log(this.form[this.id])
                  return this.form[this.id]
              },
              set(val){
                  this.update(val)
              }
          }
        },
        vuex: {
            getters: {
                form: state => state.form
            },
            actions: {
                update({dispatch, state}, val) {
                    dispatch('UPDATE_FORM', this.id, val)
                }
            }
        }
    }
</script>