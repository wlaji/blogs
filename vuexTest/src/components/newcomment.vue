<template>
  <div class="wrap">
    <div class="commentBox">
      <h3>comment</h3>
      <p v-if="commentlist.length===0">No comment, I'll make the first comment！</p>
      <div class="comment-list" v-else>
        <ul id="list1" class="comment-ul1" v-for="(item1,index1) in commentlist" :key=index1>
          <!-- <tree-menu :model='item' :index='index' :replyId="item.reply_id" @sendInfo="getInfo">
          </tree-menu> -->
          <li class="comments" id="comm_list1">
            <div class="comment_all">
              <div class="comments1_l">
                <img src="https://res.cloudinary.com/dehxpneyp/image/upload/v1533860792/v1_1/gs-blogs/avatar/avatar.jpg" alt="">
                <span class="name">{{item1.name}}</span>
                <span class="time">{{item1.addtime}}</span>
                <p class="content">{{item1.content}} </p>
                <p class="replay" @click="reply1(item1.id,item1.name,index1,null)">{{comm}}</p>
              </div>
              <comment-textarea :id="artId" :type="type" :name="oldName" :replyId="id" @cancelComm="cancel" @fresh="fresh" v-if="hide1&&index1==currentIndex1"></comment-textarea>
            </div>
            <ul id="list2" class="comment-ul2" v-for="(item2,index2) in item1.children" :key=index2>
              <li class="comments" id="comm_list2">
                <div class="comment_all">
                  <div class="comments1_l">
                    <img src="https://res.cloudinary.com/dehxpneyp/image/upload/v1533860792/v1_1/gs-blogs/avatar/avatar.jpg" alt="">
                    <span class="name">{{item2.name}}</span>
                    <span class="time">{{item2.addtime}}</span>
                    <p class="content">{{item2.content}} </p>
                    <p class="replay" @click="reply2(item2.id,item2.name,index2,index1)">{{comm}}</p>
                  </div>
                  <comment-textarea :id="artId" :type="type" :name="oldName" :replyId="id" @cancelComm="cancel" @fresh="fresh" v-if="hide2&&index2==currentIndex2&&index1==parentCurrentIndex"></comment-textarea>
                </div>
                <ul id="list3" class="comment-ul3" v-for="(item3,index3) in item2.children" :key=index3>
                  <li class="comments" id="comm_list3">
                    <div class="comment_all">
                      <div class="comments1_l">
                        <img src="https://res.cloudinary.com/dehxpneyp/image/upload/v1533860792/v1_1/gs-blogs/avatar/avatar.jpg" alt="">
                        <span class="name">{{item3.name}}</span>
                        <span class="time">{{item3.addtime}}</span>
                        <p class="content">{{item3.content}} </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <comment-textarea :id="artId" :type="type" :name="oldName" :replyId="id" @cancelComm="cancel" @fresh="fresh" v-if="show"></comment-textarea>
  </div>
</template>
<style scoped>
@media (min-width: 768px) {
  .commentBox {
    background-color: #FAFFF0;
  }

  .commentBox h3 {
    background-color: #3383CBFF;
    height: 2em;
    line-height: 2em;
    font-size: 1.5em;
    padding-left: 0.8em;
    color: #fff;
  }

  .commentBox>p {
    height: 10em;
    line-height: 10em;
    text-align: center;
    font-size: 1.2rem;
  }

  .comments {
    border: 1px solid #ccc;
    margin: 0.8em;
  }

  .comments1_l {
    padding: 0.8em;
  }

  .comments1_l>img {
    float: left;
    width: 3.5em;
    height: 3.5em;
  }

  .name {
    margin-left: 0.8em;
  }

  .time {
    float: right;
  }

  .comments1_l .content {
    margin-left: 4em;
    line-height: 2em;
  }

  .comment-ul2,
  .comment-ul3 {
    list-style: none;
    padding-left: 3.5em;
  }


  .replay {
    color: blue;
    text-align: right;
    cursor: pointer;
    margin-bottom: 0.8em;
  }
}

@media (max-width: 768px) {
  .commentBox {
    background-color: #FAFFF0;
  }

  .commentBox h3 {
    background-color: #3383CBFF;
    height:2em;
    line-height: 2em;
    font-size: 1.5em;
    padding-left: 10px;
    color: #fff;
  }

  .commentBox>p {
    height: 10em;
    line-height: 10em;
    text-align: center;
    font-size: 1.2rem;
  }

  .comments {
    border: 1px solid #ccc;
    margin: 0.5em;
  }

  .comments1_l {
    padding: 0.5em;
  }

  .comments1_l>img {
    float: left;
    width: 1.5em;
    height: 1.5em;
  }

  .name {
    margin-left: 0.8em;
  }

  .time {
    float: right;
  }

  .comments1_l .content {
    margin-left: 2em;
    line-height: 2em;
  }

  .comment-ul2,
  .comment-ul3 {
    list-style: none;
    padding-left: 1.5em;
  }


  .replay {
    color: blue;
    text-align: right;
    cursor: pointer;
    margin-bottom: 0.5em;
  }
}

</style>
<script>
import commentTextarea from './commentTextarea.vue'
export default {
  props: ['artId', 'commentlist'],
  components: {
    commentTextarea,

  },
  data() {
    return {
      show: true,
      hide1: false,
      hide2: false,
      id: '',
      type: 0,
      oldName: '',
      comment: '',
      chooseIndex: '',
      inde: 0,
      comm: 'Reply',
      parentIndex: null,
      currentIndex1: '',
      currentIndex2: '',
    }
  },
  methods: {
    reply1(id, name, index, parentIndex) {
      this.id = id;
      this.type = 1;
      this.oldName = name;
      this.chooseIndex = index;
      this.parentIndex = parentIndex;
      this.hide2 = false;
      this.show = false;
      this.hide1 = true;
      this.currentIndex1 = index;
    },
    reply2(id, name, index, parentIndex) {
      this.id = id;
      this.type = 1;
      this.oldName = name;
      this.chooseIndex = index;
      this.parentIndex = parentIndex;
      this.hide1 = false;
      this.show = false;
      this.hide2 = true;
      this.currentIndex2 = index;
      this.parentCurrentIndex = parentIndex;
    },
    cancel() {
      this.id = 0;
      this.name = "";
      this.type = 0;
      this.hide1 = false;
      this.show = true;
      this.hide2 = false;
    },
    fresh(msg) {
      var that = this;
      this.$emit("fresh", { id: msg.id, article_id: msg.article_id, content: msg.content, reply_id: msg.reply_id, name: msg.name, addtime: msg.addtime, type: this.type, email: msg.email, ip: msg.ip, user_id: msg.user_id, children: [], chooseIndex: that.chooseIndex, parentIndex: that.parentIndex });

    },

  },
  mounted() {

  }
}

</script>
