class UserPack < ApplicationRecord

  validates :user_id, presence: true
  validates :pack_id, presence: true
  validates :pack_id, uniqueness: { scope: :user_id }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'
  
  belongs_to :pack,
    primary_key: :id,
    foreign_key: :pack_id,
    class_name: 'Pack'

  has_many :meditations,
    through: :pack,
    source: :meditations

  has_many :meditation_completions,
    foreign_key: :user_pack_id,
    class_name: 'MeditationCompletion'

  def length 
    return self.pack.length
  end

  def user_pack_completed?
    user = self.user
    med_com = user.meditation_completions.where(user_pack_id: self.id)
    return true if self.pack.length >= med_com.length
    return false
  end  
  
  def played_meditations
    user = self.user
    med_com = user.meditation_completions.where(user_pack_id: self.id)
    return med_com.length
  end

  def current_meditation
    return self.pack.meditations.where(order: self.current_med_no).last
  end

  def increment_current_med_no!
    if self.current_med_no >= self.length
      self.current_med_no = 1
    else
      self.current_med_no += 1
    end
    self.save
  end
  
  # def current_meditation
  #   if self.user_pack_completed?
  #     return self.meditations.with_attached_track.where(order: 1).last
  #   end
  #   return self.meditations.with_attached_track.where(order: self.played_meditations + 1).last
  # end

  #   current_meditation_no
  # def current_meditation
  #   return self.mediations.get_by_order(current_meditation_no)
  #   if self.user_pack_completed?
  #     return self.meditations.with_attached_track.where(order: 1).last
  #   end
  #   return self.meditations.with_attached_track.where(order: self.played_meditations + 1).last
  # end


end