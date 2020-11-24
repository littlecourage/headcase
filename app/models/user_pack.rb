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

  
  def user_pack_completed?
    return true if self.pack.length == self.meditation_completions.length
    return false
  end


end